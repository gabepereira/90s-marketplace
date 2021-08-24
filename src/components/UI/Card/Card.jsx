import './styles.scss';

const Card = ({ children, className = '' }) => {
  return (
    <div data-testid="Card" className={`card ${className}`}>
      {children}
    </div>
  );
};

export default Card;
