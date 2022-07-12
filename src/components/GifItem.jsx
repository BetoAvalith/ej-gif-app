import PropTypes from 'prop-types';

export const GifItem = ({title, url}) => {
  
    return (
        <div className="card">
            <img src={url} alt="gif" />
            <p data-testid = 'test-title'>{title}</p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
}

// GifItem.defaultProps = {
//     title: 'Gif',
//     url: 'https://media1.giphy.com/media/QxZ3PeBkH2KV7riKuz/giphy.gif?cid=93921f84wrrng8tsukpxhda3wb2vcyh2xu7f24wxiepbwnf6&rid=giphy.gif&ct=g'
// }
