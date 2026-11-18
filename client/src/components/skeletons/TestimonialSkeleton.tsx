import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function TestimonialSkeleton() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-black text-neutral-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Section Heading Skeleton */}
      <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col items-center">
        <Skeleton className="h-12 w-3/4 md:w-1/2 mb-4 bg-neutral-200 dark:bg-neutral-900" />
        <Skeleton className="h-6 w-full md:w-2/3 bg-neutral-200 dark:bg-neutral-900" />
      </div>

      {/* Testimonials Grid Skeleton */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[...Array(3)].map((_, i) => (
          <Card
            key={i}
            className="bg-white dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xs dark:shadow-lg"
          >
            <CardContent className="p-8 text-center flex flex-col items-center">
              {/* Avatar Skeleton */}
              <Skeleton className="w-16 h-16 rounded-full mb-4 bg-neutral-200 dark:bg-neutral-900" />

              {/* Quote Skeleton */}
              <Skeleton className="h-4 w-full mb-2 bg-neutral-200 dark:bg-neutral-900" />
              <Skeleton className="h-4 w-5/6 mb-6 bg-neutral-200 dark:bg-neutral-900" />

              {/* Star Rating Skeleton */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Skeleton key={index} className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-900" />
                ))}
              </div>

              {/* Name Skeleton */}
              <Skeleton className="h-6 w-32 bg-neutral-200 dark:bg-neutral-900" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
