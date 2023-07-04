interface Props {
    image: string;
    content: React.ReactNode;
    left: boolean;
}


function PictureBox({ image, content, left }: Props) {
    return (
      <div className="picture-box">
        {left ? (
          <>
            <div className="picture-box-image-box">
              <img className="picture-box-image" src={image} alt="Image" />
            </div>
            <div className="picture-box-text-box">{content}</div>
          </>
        ) : (
          <>
            <div className="picture-box-text-box">{content}</div>
            <div className="picture-box-image-box">
              <img className="picture-box-image" src={image} alt="Image" />
            </div>
          </>
        )}
      </div>
    );
  }

export default PictureBox