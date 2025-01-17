const UserSection = ({children, className, style}) => {
  return (
    <section style={style} className={`bg-white h-full rounded-md p-4 md:p-10 lg:p-4 ${className}`}>{children}</section>
  );
};

export default UserSection;