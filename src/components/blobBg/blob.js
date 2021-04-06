export const Blob = ({ different, modal }) => {
  return modal ? (
    different ? (
      <div id="blobModal" className="blob sizeBlobModal">
        &nbsp;
      </div>
    ) : (
      <div id="blobModalDiff" className="blob sizeBlobModal">
        &nbsp;
      </div>
    )
  ) : different ? (
    <div id="blob" className="blob sizeBlob">
      &nbsp;
    </div>
  ) : (
    <div id="blob_diff" className="blob sizeBlob">
      &nbsp;
    </div>
  );
};
