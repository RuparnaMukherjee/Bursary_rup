const dev = {
	port: 3001,
	mongodb: {
		connectionString: 'mongodb://bursary:Hello#123@45.35.62.58:27017/bursary?authSource=admin&w=1',
		db: 'api'
	},
	otpLimitInMinute: 5,
	secret: 'MySecretKey',
	mail: {
		host: 'phoenix.ditinex.com',
		port: 587,
		auth: {
			user: 'test@ditinex.com',
			pass: '![n!=%w^Y80W'
		},
		from: 'Bursary <admin@vaalvu.com>'
	},
	adminEmail: 'admin@vaalvu.com',
	siteName: 'Vaalvu',
	siteUrl: 'http://45.35.62.58:3000',
	apiUrl: 'http://45.35.62.58:3001',
	siteLogo: 'http://45.35.62.58:3001/logo_small.png',
	publicImagePath: 'public/images/',
	publicVideoPath: 'public/videos/',
	publicFilePath: 'public/files/'
}

const production = {
	port: 3001,
	mongodb: {
		connectionString: 'mongodb://vaalvu:uVycAH5&u@66.235.173.158/vaalvu?authSource=admin&w=1',
		db: 'api'
	},
	otpLimitInMinute: 5,
	secret: 'k\qrQQ#Y{m+6uxEm',
	mail: {
		host: 'us2.smtp.mailhostbox.com',
		port: 587,
		auth: {
			user: 'admin@vaalvu.com',
			pass: '0698eCZsmo0yA957'
		},
		from: 'Vaalvu <admin@vaalvu.com>'
	},
	adminEmail: 'asifakramsk@gmail.com',
	siteName: 'Vaalvu',
	siteUrl: 'https://www.vaalvu.com',
	apiUrl: 'https://api.vaalvu.com',
	siteLogo: 'https://www.vaalvu.com/logo_small.png',
	publicImagePath: 'public/images/',
	publicVideoPath: 'public/videos/',
	publicFilePath: 'public/files/'
}

let ENV = dev

if(process.env.ENV=='development')
	ENV = dev

module.exports = ENV