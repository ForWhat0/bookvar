import { nodemailerHook } from "../../src/components/hooks/nodemailerHook";

export default (req, res) => {
  const { sendContent } = req.body;
  nodemailerHook({ subject: "Замовлення", sendContent, res });
};
