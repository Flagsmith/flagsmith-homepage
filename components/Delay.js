export default class Delay extends React.Component {
  static displayName = 'Delay';

  static propTypes = {};

  constructor(props) {
      super(props);
      this.state = {};
  }

  componentWillMount() {
      setTimeout(() => {
          this.setState({ visible: true });
      }, 100);
  }

  render() {
      // const { props } = this;
      return this.state.visible ? this.props.children : (
          <div className="loading"/>
      );
  }
}
