export default function Footer() {
  return (
    <footer className="
      bg-header-bottom px-5 py-10
      sm:px-0 sm:py-20
    "
    >
      <p className="mx-auto max-w-250 text-center text-sm text-name">
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        John Heher. All rights reserved.
      </p>
    </footer>
  );
}
