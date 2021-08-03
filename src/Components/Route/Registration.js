import { connect } from "react-redux";
import { register } from "../../redux/authorization/authorization-opetations";
import style from "./registation.module.scss";
import { useState } from "react";

const Registration = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    onRegister({ name, email, password });
  };

  const getValueInput = (e) => {
    const { value, name } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
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
          Name
          <input
            className={style.input}
            type="name"
            name="name"
            onChange={getValueInput}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={style.label}>
          Email
          <input
            className={style.input}
            type="email"
            name="email"
            value={email}
            onChange={getValueInput}
            title="Enter your email"
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
            title="Пароль должен состоять из цифр и букв"
            required
          />
        </label>
        <button type="submit" className={style.button}>
          Register
        </button>
      </form>
    </div>
  );
};
// class Registration extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//   };

// submitForm = (e) => {
//   e.preventDefault();

//   this.props.onRegister(this.state);
// };

// getValueInput = (e) => {
//   const { value, name } = e.currentTarget;
//   this.setState({ [name]: value });
// };

//   render() {
//     const { name, email, password } = this.state;
// return (
//   <div className={style.boxForm}>
//     <form onSubmit={this.submitForm} className={style.form}>
//       <label className={style.label}>
//         Name
//         <input
//           className={style.input}
//           type="name"
//           name="name"
//           onChange={this.getValueInput}
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//         />
//       </label>
//       <label className={style.label}>
//         Email
//         <input
//           className={style.input}
//           type="email"
//           name="email"
//           value={email}
//           onChange={this.getValueInput}
//           title="Enter your email"
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
//           title="Пароль должен состоять из цифр и букв"
//           required
//         />
//       </label>
//       <button type="submit" className={style.button}>
//         Register
//       </button>
//     </form>
//   </div>
// );
//   }
// }

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(Registration);
