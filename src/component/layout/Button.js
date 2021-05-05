function Button(props) {
  return (
    <div className="button" style={{ marginTop: props.margin }}>
      {props.children}
    </div>
  );
}

export default Button;
