export const Blob = ({ different }) => {
  return different ? (
    <div id="blob" className="blob sizeBlob">
      &nbsp;
    </div>
  ) : (
    <div id="blob_diff" className="blob sizeBlob">
      &nbsp;
    </div>
  );
};
