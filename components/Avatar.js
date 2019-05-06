export default function Avatar(props) {
  return (
    <figure style={{ margin: 0, padding: 0, ...props.style }}>
      <img
        style={{ borderRadius: '50%' }}
        width={70}
        src="static/jomaca.png"
        alt="Jorge Calle"
      />
    </figure>
  );
}
