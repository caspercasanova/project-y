import { useRouter } from 'next/router';

import React from 'react';

export default function result() {
  const router = useRouter();
  const { session_id } = router.query;

  return (
    <div>
      <div>Payment Results</div>
      <pre>{session_id}</pre>
    </div>
  );
}
