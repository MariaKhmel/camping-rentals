import CategoryButton from '../CategoryButton/CategoryButton';
import FeaturesDetails from '../Details/Details';
import Form from '../Form/Form';
import css from './Features.module.css';
const Features = ({ ad }) => {
  const {
    adults,
    transmission,
    engine,
    beds,
    details: { airConditioner, CD, hob },
  } = ad;
  return (
    <div className={css.features}>
      <div>
        <ul className={css.featuresList}>
          <li>
            <CategoryButton value={adults} category="adults" />
          </li>
          <li>
            <CategoryButton value={transmission} />
          </li>
          <li>
            <CategoryButton category="AC" />
          </li>
          <li>
            <CategoryButton value={engine} />
          </li>
          <li>
            <CategoryButton category="Kitchen" />
          </li>
          <li>
            <CategoryButton value={beds} category="beds" />
          </li>
          <li>
            <CategoryButton value={airConditioner} category="airConditioner" />
          </li>
          <li>
            <CategoryButton category={CD} />
          </li>
          <li>
            <CategoryButton value={hob} category="hob" />
          </li>
        </ul>
        <FeaturesDetails ad={ad} />
      </div>
      <Form />
    </div>
  );
};

export default Features;
