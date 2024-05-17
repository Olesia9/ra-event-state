import React from 'react'

class ProjectList extends (React.Component) {
    render() {
        const { image, select } = this.props;

        if (!image) {
            return <div>No images to display</div>;
        }

        return <>
            <div>
                {image.filter(item => select === 'All' || item.category === select).map((img, i) => {
                        return <img src={img.img} alt={'alt'} key={i}/>
                    }
                )}
            </div>
        </>
    }
}

export default ProjectList
