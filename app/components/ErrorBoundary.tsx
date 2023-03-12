import React from 'react';

class ErrorBoundarySimple extends React.Component {
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
        <div className="absolute top-[100px] right-[500px] flex h-[400px] w-[400px] items-center justify-center rounded-full bg-slate-400">
          <p>Could not load globe. Please reload.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundarySimple;
