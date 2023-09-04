// import React from 'react';

import { useRouteError, isRouteErrorResponse } from '@remix-run/react';

// type ErrorBoundarySimpleProps = {
//   children: React.ReactNode;
// };

// class ErrorBoundarySimple extends React.Component<ErrorBoundarySimpleProps> {
//   state = { hasError: false };

//   componentDidCatch(error: unknown) {
//     // report the error to your favorite Error Tracking tool (ex: Sentry, Bugsnag)
//     console.error(error);
//   }

//   static getDerivedStateFromError(error: unknown) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div
//           className={`absolute bottom-[20%] left-[50%] flex h-[250px] w-[250px] translate-x-[-50%] items-center justify-center rounded-full bg-slate-400 md:right-[400px] md:top-[100px] md:h-[500px] md:w-[500px]`}
//         >
//           <p>Could not load globe. Please reload.</p>
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundarySimple;

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </div>
    );
  }

  // Don't forget to typecheck with your own logic.
  // Any value can be thrown, not just errors!
  // let errorMessage = 'Unknown error';
  // if (isDefinitelyAnError(error)) {
  //   errorMessage = error.message;
  // }

  return (
    <div
      className={`absolute bottom-[20%] left-[50%] flex h-[250px] w-[250px] translate-x-[-50%] items-center justify-center rounded-full bg-slate-400 md:right-[400px] md:top-[100px] md:h-[500px] md:w-[500px]`}
    >
      <p>Could not load globe. Please reload.</p>
    </div>
  );
}
