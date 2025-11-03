import { Suspense } from 'react';
import SuccessClient from './SuccessClient';

export const dynamic = 'force-dynamic'; // avoid static prerender

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] grid place-items-center">
        <p className="text-sm text-black/60">Loading...</p>
      </div>
    }>
      <SuccessClient />
    </Suspense>
  );
}
