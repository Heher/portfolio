import { Link } from 'react-router';

export default function TablesUI() {
  return (
    <section className="w-100 shrink-0 rounded-2xl bg-white p-5">
      <Link to="/ui/tables">
        <h2 className="mb-5 text-2xl font-semibold">Tables</h2>
      </Link>
    </section>
  );
}
