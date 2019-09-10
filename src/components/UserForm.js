import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";
import PasswordInput from "./common/PasswordInput";

function UserForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="first_name"
        label="First Name"
        onChange={props.onChange}
        name="first_name"
        value={props.user.first_name}
        error={props.errors.first_name}
      />
      <TextInput
        id="last_name"
        label="Last Name"
        onChange={props.onChange}
        name="last_name"
        value={props.user.last_name}
        error={props.errors.last_name}
      />
      <TextInput
        id="email"
        label="Email"
        onChange={props.onChange}
        name="email"
        value={props.user.email}
        error={props.errors.email}
      />
      <PasswordInput
        id="user_password"
        label="Password"
        onChange={props.onChange}
        name="user_password"
        value={props.user.user_password}
        error={props.errors.user_password}
      />
      <TextInput
        id="mobile_number"
        label="Mobile Number"
        onChange={props.onChange}
        name="mobile_number"
        value={props.user.mobile_number}
        error={props.errors.mobile_number}
      />
      <TextInput
        id="device_id"
        label="Device ID"
        onChange={props.onChange}
        name="device_id"
        value={props.user.device_id}
        error={props.errors.device_id}
      />
      <TextInput
        id="user_role"
        label="Role"
        onChange={props.onChange}
        name="user_role"
        value={props.user.user_role}
        error={props.errors.user_role}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default UserForm;
