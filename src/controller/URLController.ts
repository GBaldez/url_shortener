import { Request, Response } from 'express';
import shortId from 'shortid';
import { config } from '../configs/Constants';
import { URLModel } from '../database/model/URL';
const validUrl = require('valid-url');

export class URLController {
    public async shorten (req: Request, response: Response): Promise<void> {
        const { originURL } = req.body;

        if(validUrl.isUri(originURL)) {
            try {
                const url = await URLModel.findOne({ originURL })

                if (url) {
                    response.json(url)
                    return
                } else {
                    const hash = shortId.generate()
                    const shortURL = `${config.API_URL}/${hash}`
                    const newURL = await URLModel.create({ hash, shortURL, originURL })
                    response.json(newURL)
                }
            } catch (err) {
                response.status(500).json({ message: err.message })
            }	
        } else {
            response.status(400).json({ message: 'Invalid URL' })
        }
    }

    public async redirect(req: Request, response: Response): Promise<void> {
        const { hash } = req.params
        const url = await URLModel.findOne({ hash })

        if (url) {
            response.redirect(url.originURL)
            return
        }

        response.status(400).json({ error: 'URL not found'});
    }
}