import multer from "multer";
import path from "path";

// const createStorage = (targetPath) => {
// 	multer.diskStorage({
// 		destination: targetPath,
// 		filename: (req, file, cb) => {
// 			cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
// 		},
// 	});
// };

// const fileSizeLimit = 5 * 1024 * 1024; //5MB

// export const storageGallery = multer({
// 	storage: createStorage("./public/images"),
// 	limits: { fileSize: fileSizeLimit },
// });

// export const storageBannerImages = multer({
// 	storage: createStorage("./public/banners"),
// 	limits: { fileSize: fileSizeLimit },
// });

// export const storageIllustration = multer({
// 	storage: createStorage("./public/illustrations"),
// 	limits: { fileSize: fileSizeLimit },
// });

// export const storageWebContent = multer({
// 	storage: createStorage("./public/konten_web"),
// 	limits: { fileSize: fileSizeLimit },
// });

// export default storageGallery;

const upload = multer({
	storage: multer.memoryStorage(),
	limits: {
		fileSize: 5 * 1024 * 1024, // Batas 5MB (contoh)
	},
	fileFilter: (req, file, cb) => {
		if (file.mimetype.startsWith("image/")) {
			cb(null, true);
		} else {
			cb(new Error("Hanya diperbolehkan file gambar!"), false);
		}
	},
});
const uploadSinglePhoto = upload.single("photo");
export default uploadSinglePhoto;
