import { Outlet } from 'react-router';

export default function UILayout() {
  return (
    <div className="m-0 mx-auto w-screen max-w-lg px-5 py-10">
      <Outlet />
    </div>
  );
}
