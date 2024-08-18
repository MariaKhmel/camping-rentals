import css from './FeaturesDetails.module.css';
const FeaturesDetails = ({ ad }) => {
  const { form, length, width, height, tank, consumption } = ad;
  return (
    <>
      <h3>Vehicle details</h3>
      <ul>
        <li className={css.detailsItem}>
          <p>Form</p>
          <p>{form}</p>
        </li>
        <li className={css.detailsItem}>
          <p>Length</p>
          <p>{length}</p>
        </li>
        <li className={css.detailsItem}>
          <p>Width</p>
          <p>{width}</p>
        </li>
        <li className={css.detailsItem}>
          <p>Height</p>
          <p>{height}</p>
        </li>
        <li className={css.detailsItem}>
          <p>Tank</p>
          <p>{tank}</p>
        </li>
        <li className={css.detailsItem}>
          <p>Consumption</p>
          <p>{consumption}</p>
        </li>
      </ul>
    </>
  );
};
export default FeaturesDetails;
