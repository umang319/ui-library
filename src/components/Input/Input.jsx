export default function Input({
  label,
  error,
  type = "text",
  ...props
}) {
  return (
    <div className="ui-input-group">
      {label && <label className="ui-input-label">{label}</label>}

      <input type={type} className="ui-input" {...props} />

      {error && <p className="ui-input-error">{error}</p>}
    </div>
  );
}