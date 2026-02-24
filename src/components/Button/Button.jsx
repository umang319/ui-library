export default function Button({
  children,
  variant = "primary",
  type = "button",
  ...props
}) {
  const styles = {
    primary: "ui-btn ui-btn-primary",
    secondary: "ui-btn ui-btn-secondary",
  };

  return (
    <button type={type} className={styles[variant]} {...props}>
      {children}
    </button>
  );
}
