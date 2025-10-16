import multer from "multer";
import path from "path";

const createStorage = (targetPath) => {
	multer.diskStorage({
		destination: targetPath,
		filename: (req, file, cb) => {
			cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
		},
	});
};

const fileSizeLimit = 3 * 1000 * 1000; //3MB

export const storageGallery = multer({
	storage: createStorage("./public/images"),
	limits: { fileSize: fileSizeLimit },
});

export const storageBannerImages = multer({
	storage: createStorage("./public/banner"),
	limits: { fileSize: fileSizeLimit },
});

export const storageIllustration = multer({
	storage: createStorage("./public/illustrations"),
	limits: { fileSize: fileSizeLimit },
});

export const storageWebContent = multer({
	storage: createStorage("./public/konten_web"),
	limits: { fileSize: fileSizeLimit },
});

export default storageGallery;
