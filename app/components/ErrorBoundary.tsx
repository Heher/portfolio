import React from 'react';

type ErrorBoundarySimpleProps = {
  children: React.ReactNode;
};

class ErrorBoundarySimple extends React.Component<ErrorBoundarySimpleProps> {
  state = { hasError: false };

  componentDidCatch(error: unknown) {
    // report the error to your favorite Error Tracking tool (ex: Sentry, Bugsnag)
    console.error(error);
  }

  static getDerivedStateFromError(error: unknown) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className={`absolute bottom-[20%] left-[50%] flex h-[250px] w-[250px] translate-x-[-50%] items-center justify-center rounded-full bg-slate-400 md:top-[100px] md:right-[400px] md:h-[500px] md:w-[500px]`}
        >
          <p>Could not load globe. Please reload.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundarySimple;
