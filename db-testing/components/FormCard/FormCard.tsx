import { Form } from '../../models/Form';

const FormCard: React.VFC<Form> = (form) => {
	return (
		<div>
			<h1>{form.scouter}</h1>
			<h2>{form.match_number}</h2>
		</div>
	);
};

export default FormCard;
