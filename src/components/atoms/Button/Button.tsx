export const Button = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => (
  <button {...props} className="p-2 bg-blue-500 text-white rounded-md">
    {children}
  </button>
);
