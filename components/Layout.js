import Header from './Header';

export default function Layout(props) {
  return (
    <div {...props}>
      <Header />
      {props.children}
    </div>
  );
}
