import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
      addressNumber: Yup.string(),
      addressComplement: Yup.string(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      zipCode: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
      addressNumber: Yup.string(),
      addressComplement: Yup.string(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      zipCode: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);
    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    await recipient.update(req.body);

    return res.send();
  }
}

export default new RecipientController();
