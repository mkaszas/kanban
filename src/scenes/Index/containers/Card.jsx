import { connect } from 'react-redux';

import { getCard } from '../../../store/selectors/cards';
import { renameCard } from '../../../store/actions/cards';

function CardContainer({ cardId, renderCard, card, rename }) {
  const { title } = card;
  return renderCard({
    id: cardId,
    title,
    rename,
  });
}

const mapStateToProps = (state, { cardId }) => ({
  card: getCard(state, cardId),
});

const mapDispatchToProps = (dispatch, { cardId }) => ({
  rename: title => dispatch(renameCard(cardId, title)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
