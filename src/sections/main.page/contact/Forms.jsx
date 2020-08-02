import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { Box, Button, TextField } from "@material-ui/core";
import axios from "axios";
import Style from "../../../assets/Styles.json";

const GOOGLE_FORM_ACTION_URL = "";
const GOOGLE_FORM_NAME_ID = "";
const GOOGLE_FORM_TELEPHONE_ID = "";
const GOOGLE_FORM_EMAIL_ID = "";
const GOOGLE_FORM_MESSAGE_ID = "";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const useStyles = makeStyles((theme) => ({
	forms: {
		maxWidth: "30rem",
		padding: 0,
		margin: "10px",
	},
}));

const FormsAlert = (props) => {
	const { formsError } = props;
	if (formsError === null) {
		return null;
	} else if (formsError === true) {
		return (
			<Alert severity="error">
				This is an error alert — check it out!
			</Alert>
		);
	} else {
		return (
			<Alert severity="success">
				This is a success alert — check it out!
			</Alert>
		);
	}
};

function Forms() {
	const classes = useStyles();
	const [name, setName] = useState("");
	const [telephone, setTelephone] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [formsError, setFormsError] = useState(null);

	const handleName = (event) => {
		setName(event.target.value);
	};

	const handleTelephone = (event) => {
		setTelephone(event.target.value);
	};

	const handleMessage = (event) => {
		setMessage(event.target.value);
	};

	const handleEmail = (event) => {
		setEmail(event.target.value);
	};

	const sendMessage = () => {
		const formData = new FormData();
		formData.append(GOOGLE_FORM_NAME_ID, name);
		formData.append(GOOGLE_FORM_MESSAGE_ID, message);
		formData.append(GOOGLE_FORM_TELEPHONE_ID, telephone);
		formData.append(GOOGLE_FORM_EMAIL_ID, email);

		axios
			.post(CORS_PROXY + GOOGLE_FORM_ACTION_URL, formData)
			.then(() => {
				setName("");
				setTelephone("");
				setEmail("");
				setMessage("");
				setFormsError(false);
			})
			.catch((err) => {
				setFormsError(true);
				console.log(err);
			});
	};

	return (
		<Box className={classes.forms} m={2}>
			<form>
				<TextField
					id="name"
					label="Seu Nome ou Sua Empresa"
					value={name}
					onChange={handleName}
					variant="outlined"
					style={{ marginBottom: "5px" }}
					fullWidth
				/>
				<br />
				<TextField
					id="telephone"
					label="Telefone"
					value={telephone}
					onChange={handleTelephone}
					variant="outlined"
					style={{ marginBottom: "5px" }}
					fullWidth
				/>
				<br />
				<TextField
					id="email"
					label="Email"
					value={email}
					onChange={handleEmail}
					variant="outlined"
					style={{ marginBottom: "5px" }}
					fullWidth
				/>
				<br />
				<TextField
					id="message"
					label="Mensagem"
					value={message}
					onChange={handleMessage}
					variant="outlined"
					style={{ marginBottom: "5px" }}
					multiline
					rows="4"
					fullWidth
				/>
				<br />
				<Button
					variant="outlined"
					onClick={() => sendMessage()}
					style={{
						borderColor: Style.colors.yellow,
						color: Style.colors.yellow,
						float: "right",
					}}
				>
					Enviar
				</Button>
			</form>

			<FormsAlert formsError={formsError} />
		</Box>
	);
}

export default Forms;
