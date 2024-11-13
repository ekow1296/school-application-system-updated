"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card } from "@/components/ui/card";
import SchoolsList from "@/components/schools/SchoolsList";
import SchoolFilters from "@/components/schools/SchoolFilters";
import Pagination from "@/components/schools/Pagination";
import { School } from "@/types/school";
import { getTopUniversities } from '@/lib/api';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const ITEMS_PER_PAGE = 10;

export default function SchoolsPage() {
  const searchParams = useSearchParams();
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const country = searchParams.get('location')?.toLowerCase() || 'us';
        const { schools: data, totalPages: pages } = await getTopUniversities(country, currentPage, ITEMS_PER_PAGE);
        
        // Filter by search query if provided
        const query = searchParams.get('q')?.toLowerCase();
        const filteredData = query
          ? data.filter(school => 
              school.name.toLowerCase().includes(query) ||
              school.location.toLowerCase().includes(query)
            )
          : data;

        setSchools(filteredData);
        setTotalPages(pages);
      } catch (error) {
        setError('Unable to load schools data. Showing available results.');
        console.error('Error in schools page:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, [searchParams, currentPage]);

  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // If we're approaching the last page, generate more data
    if (page === totalPages - 1) {
      setIsLoadingMore(true);
      try {
        const { schools: newData, totalPages: newPages } = await getTopUniversities(
          searchParams.get('location')?.toLowerCase() || 'us',
          page + 1,
          ITEMS_PER_PAGE
        );
        setSchools(prevSchools => [...prevSchools, ...newData]);
        setTotalPages(newPages);
      } catch (error) {
        console.error('Error loading more schools:', error);
      } finally {
        setIsLoadingMore(false);
      }
    }
  };

  const paginatedSchools = schools.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-80 flex-shrink-0">
            <Card className="p-6 sticky top-20">
              <SchoolFilters />
            </Card>
          </aside>
          
          <main className="flex-1">
            {error && (
              <Alert className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : schools.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No schools found matching your criteria. Try adjusting your filters.
              </div>
            ) : (
              <>
                <div className="mb-4 text-muted-foreground">
                  Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{' '}
                  {Math.min(currentPage * ITEMS_PER_PAGE, schools.length)} of{' '}
                  {schools.length} results
                </div>
                <SchoolsList schools={paginatedSchools} />
                {isLoadingMore && (
                  <div className="flex justify-center my-4">
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                  </div>
                )}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}