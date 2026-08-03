import { Outlet } from 'react-router';

export default function UILayout() {
  return (
    <div className="m-0 mx-auto min-h-full w-screen pt-10">
      <Outlet />
    </div>
  );
}
