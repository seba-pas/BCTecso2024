import { useEffect, useRef } from "react";
import $ from "jquery";
import "bootstrap-fileinput";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-fileinput/css/fileinput.min.css";
import "bootstrap-fileinput/js/fileinput.min.js";

const EurekaUploadFile = ({ Buttons, origen, ancho, alto, deleteImages = () => {}, titulo = "Seleccione un archivo...", tipoAceptar, clase, disable = false, onFileUploaded = () => {}, images = [], onCheckLenght = () => {} }) => {
  const refInput = useRef();
  function getTipoClass(clase) {
    if (clase !== undefined) return clase;
    else return "file";
  }
  function getTipoInput(tipo) {
    if (tipo !== undefined) return tipo;
    else return "file";
  }
  function getTipoAccept(tipoAccept) {
    switch (tipoAccept?.toLowerCase()) {
      case "imagen":
        return "image/*";
      case "file":
        return ".xls, .xlsx";
      default:
        return "";
    }
  }
  function getAllowedFile(tipoAcept) {
    switch (tipoAcept) {
      case "imagen":
        return ["jpg", "jpeg", "png", "gif"];
      case "file":
        return ["xls", "xlsx"];
      default:
        return [];
    }
  }
  function getMaxWidth(ancho) {
    if (ancho !== undefined) return ancho;
    else return 800;
  }
  function getMaxHeight(alto) {
    if (ancho !== undefined) return alto;
    else return 600;
  }
  function initialPreview(image) {
    if (Array.isArray(image)) return image?.map((value, key) => value.url);
    else return [];
  }
  function initialPreviewConfig(image) {
    if (Array.isArray(image))
      return image?.map((value, key) => {
        let valor = value.url.split("/").at(-1);
        return {
          caption: valor,
          size: false,
          key: key,
          extra: { id: valor },
          showZoom: false,
          showUpload: false,
          showRotate: false,
          showCancel: false,
        };
      });
    else return [];
  }
  useEffect(() => {
    $(refInput.current)
      .fileinput({
        allowedFileExtensions: getAllowedFile(tipoAceptar),
        initialPreview: initialPreview(images),
        initialPreviewAsData: true,
        initialPreviewFileType: "image",
        dropZoneTitle: titulo,
        initialPreviewConfig: initialPreviewConfig(images),
        uploadAsync: true,
        showPreview: true,
        showCaption: false,
        showDownload: false,
        showBrowse: false,
        overwriteInitial: false,
        maxImageWidth: getMaxWidth(ancho),
        maxImageHeight: getMaxHeight(alto),
        showCancel: false,
        showRemove: false,
        showUpload: false,
        showRotate: false,
      })
      .on("fileuploaded", (event, previewId, index, fileId, data) => {
        var list = images.length > 0 ? images : [];
        var res = previewId.response.initialPreviewConfig;
        if (Object.keys(res).length > 0 && !list.some((value) => value.path === res.url)) list.push({ path: res.url, url: res.downloadUrl });
        onFileUploaded(list);
      })
      .on("filebatchselected", (event, files) => {
        $("#" + event.currentTarget.id).fileinput("upload");
        onCheckLenght(files);
      })
      .on("filedeleted", function (event, key, jqXHR, data) {
        if (images.length > 0) {
          if (images[key]?.url === `${REACT_APP_URL_BLUEHOST}uploads/${data.id}`) {
            images.splice(key, 1);
          }
        }
        deleteImages("json_imagenes", JSON.stringify(images));
      })
      .on("filecleared", function (event, key, jqXHR, data) {
        deleteImages("json_imagenes", "[]");
      });
  }, [origen]);
  return (
    <div className={disable ? "pe-none" : ""}>
      {Buttons && Buttons()}
      <input ref={refInput} multiple id={`input-${origen}`} name="file_data" type="file" className={getTipoClass(clase)} data-browse-on-zone-click="true" accept={getTipoAccept(tipoAceptar)} disabled={disable}></input>
    </div>
  );
};
export default EurekaUploadFile;
