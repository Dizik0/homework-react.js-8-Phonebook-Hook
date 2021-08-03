import { connect } from "react-redux";
import { login } from "../../redux/authorization/authorization-opetations";
import style from "./login.module.scss";
import { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitForm = (e) => {
    e.preventDefault();

    onLogin({ email, password });
  };

  const getValueInput = (e) => {
    const { value, name } = e.currentTarget;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        console.log("error");
    }
  };
  return (
    <div className={style.boxForm}>
      <form onSubmit={submitForm} className={style.form}>
        <label className={style.label}>
          Email
          <input
            className={style.input}
            type="email"
            name="email"
            value={email}
            title="Enter your email"
            onChange={getValueInput}
            required
          />
        </label>
        <label className={style.label}>
          Password
          <input
            className={style.input}
            type="password"
            name="password"
            value={password}
            onChange={getValueInput}
            title="Enter your password"
            required
          />
        </label>
        <button type="submit" className={style.button}>
          Sing in
        </button>
      </form>
    </div>
  );
};

// class Login extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

// submitForm = (e) => {
//   e.preventDefault();

//   this.props.onLogin(this.state);
// };

// getValueInput = (e) => {
//   const { value, name } = e.currentTarget;
//   this.setState({ [name]: value });
// };

//   render() {
//     const { email, password } = this.state;
// return (
//   <div className={style.boxForm}>
//     <form onSubmit={this.submitForm} className={style.form}>
//       <label className={style.label}>
//         Email
//         <input
//           className={style.input}
//           type="email"
//           name="email"
//           value={email}
//           title="Enter your email"
//           onChange={this.getValueInput}
//           required
//         />
//       </label>
//       <label className={style.label}>
//         Password
//         <input
//           className={style.input}
//           type="password"
//           name="password"
//           value={password}
//           onChange={this.getValueInput}
//           title="Enter your password"
//           required
//         />
//       </label>
//       <button type="submit" className={style.button}>
//         Sing in
//       </button>
//     </form>
//   </div>
// );
//   }
// }

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(Login);
