import { Skeleton } from "@/components/ui/skeleton";

export default function FAQSkeleton() {
  return (
    <section className="py-20 bg-neutral-50/60 dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Heading Skeleton */}
        <div className="flex flex-col items-center mb-12">
          <Skeleton className="h-10 w-2/3 md:w-1/2 mb-4 bg-neutral-200 dark:bg-neutral-900" />
          <Skeleton className="h-5 w-full md:w-3/4 bg-neutral-200 dark:bg-neutral-900" />
        </div>

        {/* FAQ Items Skeleton */}
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/70 rounded-2xl overflow-hidden p-5 flex justify-between items-center shadow-2xs"
            >
              <Skeleton className="h-6 w-3/4 bg-neutral-200 dark:bg-neutral-900" />
              <Skeleton className="w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-900" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
