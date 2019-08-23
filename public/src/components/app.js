import PropsTypes from 'react-proptypes';
import React from 'react';
import ImageViewer from './imageViewer';
import Thumbnail from './thumbnail';

class App extends React.Component {
    state = {
        currenImageIndex: 0,
        overlayOpen: false,
    }

    handlePrevious = (event) => {
        event.stopPropagation();
        this.setState({ currenImageIndex : this.state.currenImageIndex - 1 })
    }

    openImgOverlay = () => {
        this.setState({ overlayOpen : true });
    }

    handleNext = (event) => {
        event.stopPropagation();
        this.setState({ currenImageIndex : this.state.currenImageIndex + 1 })
    }

    handleThumbnailClick = (index) => {
        if(this.state.currenImageIndex !== index) {
            this.setState({ currenImageIndex: index });
        }
    }

    closeOverlay = event => {
        event.stopPropagation();
        this.setState({ overlayOpen: false });
    }

    render() {
        const { currenImageIndex, overlayOpen } = this.state;
        const { imageList } = this.props;
        let isFirstImage = currenImageIndex == 0;
        let isLastImage = currenImageIndex == imageList.length -1;
        return (
            <>
                <div className="openContainer" onClick={this.openImgOverlay}>Click to see Images</div>
                { overlayOpen &&
                    <div className="overlay">
                        <span className="close" onClick={this.closeOverlay}> </span>
                        <div className="img-container">
                            <div onClick={!isFirstImage ? this.handlePrevious : undefined} className={`prev ${ isFirstImage ? 'disabled': ''}`}>❮</div>
                            <ImageViewer src={imageList[currenImageIndex]} />
                            <div onClick={!isLastImage ? this.handleNext: undefined} className={`next ${ isLastImage? 'disabled': ''}`}>❯</div>
                        </div>
                        <div className="thumbnailContainer">
                            <Thumbnail list={imageList} selectedIndex={currenImageIndex} onThumbnailClick={this.handleThumbnailClick}/>
                        </div>
                    </div>
                }
            </>
        )
    }
}

App.PropsTypes = {
    imageList : PropsTypes.array.isRequired,
}

export default App;