import React from 'react'
import './ProjectList.css'

class ProjectList extends React.Component {
    render() {
        const {image, select} = this.props;

        if (!image) {
            return <div>No images to display</div>;
        }

        return (
            <React.Fragment>
                <div className={'container-img'}>
                    {image.filter(item => select === 'All' || item.category === select).map((img, i) => {
                            return <img src={img.img} alt={'alt'} key={i}/>
                        }
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default ProjectList
