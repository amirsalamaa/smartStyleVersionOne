import { useState } from "react";
import PropTypes from "prop-types";

const TryOnModal = ({ isOpen, onClose, glassesImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Virtual Try-On</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-8">
          {!previewUrl ? (
            <div className="border-2 border-dashed border-blue-200 rounded-xl p-10 text-center bg-blue-50 bg-opacity-50">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer flex flex-col items-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    Upload your photo
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Supported formats: JPG, PNG
                  </p>
                </div>
              </label>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img src={previewUrl} alt="Preview" className="w-full h-auto" />
                {glassesImage && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white bg-black bg-opacity-75 p-4 rounded-lg">
                      <p className="text-lg font-semibold">Processing...</p>
                      <p className="text-sm">Applying virtual try-on</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    setPreviewUrl(null);
                  }}
                  className="px-6 py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Reset
                </button>
                <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                  Try On
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TryOnModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  glassesImage: PropTypes.string.isRequired,
};

export default TryOnModal;
