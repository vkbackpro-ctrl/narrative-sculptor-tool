import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        <li className="flex items-center space-x-2">
          <Link
            to="/"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Agence Web Lyon
          </Link>
          {items.length > 0 && (
            <>
              <span className="text-muted-foreground mx-2">-</span>
              <span className="text-foreground font-medium">{items[items.length - 1].label}</span>
            </>
          )}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
