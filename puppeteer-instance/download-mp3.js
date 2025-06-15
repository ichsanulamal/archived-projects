const urls = [
'https://h5hosting-dra.dbankcdn.com/cch5/health/com.huawei.health.h5.sleeping-music/static/dist/index.html#/share?id=73&siteId=5&countryCode=ID&appVersion=and_health_15.1.4.330&applinking=true&deeplink=huaweihealth%3A%2F%2Fhuaweihealth.app%2Fopenwith%3Faddress%3Dcom.huawei.health.h5.sleeping-music%3Fh5pro%3Dtrue%26path%3DaudioDetail%26id%3D73%26pName%3Dcom.huawei.health%26type%3DsleepAudio%26statusBarTextBlack%26isImmerse',
'https://h5hosting-dra.dbankcdn.com/cch5/health/com.huawei.health.h5.sleeping-music/static/dist/index.html#/share?id=6&siteId=5&countryCode=ID&appVersion=and_health_15.1.4.330&applinking=true&deeplink=huaweihealth%3A%2F%2Fhuaweihealth.app%2Fopenwith%3Faddress%3Dcom.huawei.health.h5.sleeping-music%3Fh5pro%3Dtrue%26path%3DaudioDetail%26id%3D6%26pName%3Dcom.huawei.health%26type%3DsleepAudio%26statusBarTextBlack%26isImmerse',
'https://h5hosting-dra.dbankcdn.com/cch5/health/com.huawei.health.h5.sleeping-music/static/dist/index.html#/share?id=1&siteId=5&countryCode=ID&appVersion=and_health_15.1.4.330&applinking=true&deeplink=huaweihealth%3A%2F%2Fhuaweihealth.app%2Fopenwith%3Faddress%3Dcom.huawei.health.h5.sleeping-music%3Fh5pro%3Dtrue%26path%3DaudioDetail%26id%3D1%26pName%3Dcom.huawei.health%26type%3DsleepAudio%26statusBarTextBlack%26isImmerse',
'https://h5hosting-dra.dbankcdn.com/cch5/health/com.huawei.health.h5.sleeping-music/static/dist/index.html#/share?id=3&siteId=5&countryCode=ID&appVersion=and_health_15.1.4.330&applinking=true&deeplink=huaweihealth%3A%2F%2Fhuaweihealth.app%2Fopenwith%3Faddress%3Dcom.huawei.health.h5.sleeping-music%3Fh5pro%3Dtrue%26path%3DaudioDetail%26id%3D3%26pName%3Dcom.huawei.health%26type%3DsleepAudio%26statusBarTextBlack%26isImmerse',
'https://h5hosting-dra.dbankcdn.com/cch5/health/com.huawei.health.h5.sleeping-music/static/dist/index.html#/share?id=4&siteId=5&countryCode=ID&appVersion=and_health_15.1.4.330&applinking=true&deeplink=huaweihealth%3A%2F%2Fhuaweihealth.app%2Fopenwith%3Faddress%3Dcom.huawei.health.h5.sleeping-music%3Fh5pro%3Dtrue%26path%3DaudioDetail%26id%3D4%26pName%3Dcom.huawei.health%26type%3DsleepAudio%26statusBarTextBlack%26isImmerse',
'https://h5hosting-dra.dbankcdn.com/cch5/health/com.huawei.health.h5.sleeping-music/static/dist/index.html#/share?id=5&siteId=5&countryCode=ID&appVersion=and_health_15.1.4.330&applinking=true&deeplink=huaweihealth%3A%2F%2Fhuaweihealth.app%2Fopenwith%3Faddress%3Dcom.huawei.health.h5.sleeping-music%3Fh5pro%3Dtrue%26path%3DaudioDetail%26id%3D5%26pName%3Dcom.huawei.health%26type%3DsleepAudio%26statusBarTextBlack%26isImmerse',
'https://h5hosting-dra.dbankcdn.com/cch5/health/com.huawei.health.h5.sleeping-music/static/dist/index.html#/share?id=2&siteId=5&countryCode=ID&appVersion=and_health_15.1.4.330&applinking=true&deeplink=huaweihealth%3A%2F%2Fhuaweihealth.app%2Fopenwith%3Faddress%3Dcom.huawei.health.h5.sleeping-music%3Fh5pro%3Dtrue%26path%3DaudioDetail%26id%3D2%26pName%3Dcom.huawei.health%26type%3DsleepAudio%26statusBarTextBlack%26isImmerse',
'https://h5hosting-dra.dbankcdn.com/cch5/health/com.huawei.health.h5.sleeping-music/static/dist/index.html#/share?id=73&siteId=5&countryCode=ID&appVersion=and_health_15.1.4.330&applinking=true&deeplink=huaweihealth%3A%2F%2Fhuaweihealth.app%2Fopenwith%3Faddress%3Dcom.huawei.health.h5.sleeping-music%3Fh5pro%3Dtrue%26path%3DaudioDetail%26id%3D73%26pName%3Dcom.huawei.health%26type%3DsleepAudio%26statusBarTextBlack%26isImmerse',
'https://h5hosting-dra.dbankcdn.com/cch5/health/com.huawei.health.h5.sleeping-music/static/dist/index.html#/share?id=316&siteId=5&countryCode=ID&appVersion=and_health_15.1.4.330&applinking=true&deeplink=huaweihealth%3A%2F%2Fhuaweihealth.app%2Fopenwith%3Faddress%3Dcom.huawei.health.h5.sleeping-music%3Fh5pro%3Dtrue%26path%3DaudioDetail%26id%3D316%26pName%3Dcom.huawei.health%26type%3DsleepAudio%26statusBarTextBlack%26isImmerse',
'https://h5hosting-dra.dbankcdn.com/cch5/health/com.huawei.health.h5.sleeping-music/static/dist/index.html#/share?id=325&siteId=5&countryCode=ID&appVersion=and_health_15.1.4.330&applinking=true&deeplink=huaweihealth%3A%2F%2Fhuaweihealth.app%2Fopenwith%3Faddress%3Dcom.huawei.health.h5.sleeping-music%3Fh5pro%3Dtrue%26path%3DaudioDetail%26id%3D325%26pName%3Dcom.huawei.health%26type%3DsleepAudio%26statusBarTextBlack%26isImmerse',
'https://h5hosting-dra.dbankcdn.com/cch5/health/com.huawei.health.h5.sleeping-music/static/dist/index.html#/share?id=353&siteId=5&countryCode=ID&appVersion=and_health_15.1.4.330&applinking=true&deeplink=huaweihealth%3A%2F%2Fhuaweihealth.app%2Fopenwith%3Faddress%3Dcom.huawei.health.h5.sleeping-music%3Fh5pro%3Dtrue%26path%3DaudioDetail%26id%3D353%26pName%3Dcom.huawei.health%26type%3DsleepAudio%26statusBarTextBlack%26isImmerse'
];

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

class MP3Downloader {
    constructor(outputDir = 'downloaded_music') {
        this.outputDir = outputDir;
        this.downloadedFiles = new Set();
        
        // Create output directory
        if (!fs.existsSync(this.outputDir)) {
            fs.mkdirSync(this.outputDir, { recursive: true });
        }
    }

    async init() {
        console.log('Launching Puppeteer browser...');
        this.browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--disable-gpu'
            ]
        });
    }

    async close() {
        if (this.browser) {
            await this.browser.close();
        }
    }

    async downloadFile(url, filename) {
        return new Promise((resolve, reject) => {
            const filepath = path.join(this.outputDir, filename);
            const file = fs.createWriteStream(filepath);
            
            const protocol = url.startsWith('https:') ? https : http;
            
            const request = protocol.get(url, (response) => {
                if (response.statusCode === 200) {
                    response.pipe(file);
                    file.on('finish', () => {
                        file.close();
                        console.log(`✓ Downloaded: ${filename}`);
                        resolve(filepath);
                    });
                } else {
                    file.close();
                    fs.unlink(filepath, () => {}); // Delete the file on error
                    reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                }
            });

            request.on('error', (err) => {
                file.close();
                fs.unlink(filepath, () => {}); // Delete the file on error
                reject(err);
            });

            file.on('error', (err) => {
                file.close();
                fs.unlink(filepath, () => {}); // Delete the file on error
                reject(err);
            });
        });
    }

    async findMP3Links(page) {
        const mp3Links = new Set();

        try {
            // Method 1: Find direct MP3 links in HTML
            const directLinks = await page.evaluate(() => {
                const links = [];
                
                // Find all audio elements
                const audioElements = document.querySelectorAll('audio');
                audioElements.forEach(audio => {
                    if (audio.src && audio.src.includes('.mp3')) {
                        links.push(audio.src);
                    }
                    // Check source elements within audio
                    const sources = audio.querySelectorAll('source');
                    sources.forEach(source => {
                        if (source.src && source.src.includes('.mp3')) {
                            links.push(source.src);
                        }
                    });
                });

                // Find all links containing .mp3
                const allLinks = document.querySelectorAll('a[href*=".mp3"], link[href*=".mp3"]');
                allLinks.forEach(link => {
                    if (link.href) {
                        links.push(link.href);
                    }
                });

                // Find data attributes that might contain MP3 URLs
                const elementsWithData = document.querySelectorAll('[data-src*=".mp3"], [data-url*=".mp3"], [data-audio*=".mp3"]');
                elementsWithData.forEach(el => {
                    ['data-src', 'data-url', 'data-audio'].forEach(attr => {
                        const value = el.getAttribute(attr);
                        if (value && value.includes('.mp3')) {
                            links.push(value);
                        }
                    });
                });

                return links;
            });

            directLinks.forEach(link => mp3Links.add(link));

            // Method 2: Intercept network requests
            const networkMP3s = await this.interceptNetworkRequests(page);
            networkMP3s.forEach(link => mp3Links.add(link));

            // Method 3: Search in page source and scripts
            const pageContent = await page.content();
            const mp3Regex = /https?:\/\/[^\s"'<>]+\.mp3/gi;
            const matches = pageContent.match(mp3Regex);
            if (matches) {
                matches.forEach(match => mp3Links.add(match));
            }

            // Method 4: Check for API calls or XHR responses
            const apiMP3s = await this.checkForAPIResponses(page);
            apiMP3s.forEach(link => mp3Links.add(link));

        } catch (error) {
            console.error('Error finding MP3 links:', error);
        }

        return Array.from(mp3Links);
    }

    async interceptNetworkRequests(page) {
        const mp3Links = [];
        
        await page.setRequestInterception(true);
        
        page.on('request', (request) => {
            request.continue();
        });

        page.on('response', async (response) => {
            const url = response.url();
            if (url.includes('.mp3') || response.headers()['content-type']?.includes('audio')) {
                mp3Links.push(url);
            }
        });

        // Wait a bit for requests to complete
        await page.waitForTimeout(3000);
        
        return mp3Links;
    }

    async checkForAPIResponses(page) {
        const mp3Links = [];

        try {
            // Execute JavaScript to find any API responses or cached data
            const apiData = await page.evaluate(() => {
                const results = [];
                
                // Check window object for audio data
                if (window.audioData || window.musicData || window.sleepAudioData) {
                    const data = window.audioData || window.musicData || window.sleepAudioData;
                    if (Array.isArray(data)) {
                        data.forEach(item => {
                            if (item.url && item.url.includes('.mp3')) {
                                results.push(item.url);
                            }
                            if (item.src && item.src.includes('.mp3')) {
                                results.push(item.src);
                            }
                            if (item.audioUrl && item.audioUrl.includes('.mp3')) {
                                results.push(item.audioUrl);
                            }
                        });
                    }
                }

                // Check localStorage and sessionStorage
                try {
                    for (let i = 0; i < localStorage.length; i++) {
                        const key = localStorage.key(i);
                        const value = localStorage.getItem(key);
                        if (value && value.includes('.mp3')) {
                            const matches = value.match(/https?:\/\/[^\s"'<>]+\.mp3/gi);
                            if (matches) results.push(...matches);
                        }
                    }
                    
                    for (let i = 0; i < sessionStorage.length; i++) {
                        const key = sessionStorage.key(i);
                        const value = sessionStorage.getItem(key);
                        if (value && value.includes('.mp3')) {
                            const matches = value.match(/https?:\/\/[^\s"'<>]+\.mp3/gi);
                            if (matches) results.push(...matches);
                        }
                    }
                } catch (e) {
                    console.log('Storage access restricted');
                }

                return results;
            });

            mp3Links.push(...apiData);
        } catch (error) {
            console.error('Error checking API responses:', error);
        }

        return mp3Links;
    }

    generateFilename(url, index) {
        try {
            const urlObj = new URL(url);
            const pathname = urlObj.pathname;
            const filename = path.basename(pathname);
            
            if (filename && filename.includes('.mp3')) {
                return filename;
            }
        } catch (error) {
            // Invalid URL, generate a name
        }
        
        return `audio_${index}.mp3`;
    }

    async scrapePage(url) {
        console.log(`\n🔍 Scraping: ${url}`);
        
        const page = await this.browser.newPage();
        
        try {
            // Set user agent and other headers
            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
            
            // Navigate to the page
            await page.goto(url, { 
                waitUntil: 'networkidle2',
                timeout: 30000 
            });

            // Wait for content to load
            await page.waitForTimeout(5000);

            // Try to trigger any lazy loading or interactions
            await page.evaluate(() => {
                // Scroll to trigger lazy loading
                window.scrollTo(0, document.body.scrollHeight);
                
                // Try to click play buttons or audio elements
                const playButtons = document.querySelectorAll('button[class*="play"], .play-btn, .audio-play, [data-action="play"]');
                playButtons.forEach(btn => {
                    try {
                        btn.click();
                    } catch (e) {}
                });
            });

            await page.waitForTimeout(3000);

            // Find MP3 links
            const mp3Links = await this.findMP3Links(page);
            
            console.log(`Found ${mp3Links.length} potential MP3 links`);
            
            // Download each MP3
            for (let i = 0; i < mp3Links.length; i++) {
                const link = mp3Links[i];
                
                if (this.downloadedFiles.has(link)) {
                    console.log(`⏭️  Already downloaded: ${link}`);
                    continue;
                }

                try {
                    const filename = this.generateFilename(link, i + 1);
                    await this.downloadFile(link, filename);
                    this.downloadedFiles.add(link);
                } catch (error) {
                    console.error(`❌ Failed to download ${link}:`, error.message);
                }
            }

        } catch (error) {
            console.error(`Error scraping ${url}:`, error);
        } finally {
            await page.close();
        }
    }

    async run(urls) {
        try {
            await this.init();
            
            console.log('🎵 Starting MP3 Download Process...');
            console.log(`📁 Output directory: ${path.resolve(this.outputDir)}`);
            
            for (const url of urls) {
                await this.scrapePage(url);
            }
            
            console.log(`\n✅ Process completed! Downloaded ${this.downloadedFiles.size} unique files.`);
            console.log(`📁 Files saved in: ${path.resolve(this.outputDir)}`);
            
        } catch (error) {
            console.error('Error in main process:', error);
        } finally {
            await this.close();
        }
    }
}

// Main execution
async function main() {
    // const urls = [
    //     'https://h5hosting-dra.dbankcdn.com/cch5/health/com.huawei.health.h5.sleeping-music/static/dist/index.html#/share?id=73&siteId=5&countryCode=ID&appVersion=and_health_15.1.4.330&applinking=true&deeplink=huaweihealth%3A%2F%2Fhuaweihealth.app%2Fopenwith%3Faddress%3Dcom.huawei.health.h5.sleeping-music%3Fh5pro%3Dtrue%26path%3DaudioDetail%26id%3D73%26pName%3Dcom.huawei.health%26type%3DsleepAudio%26statusBarTextBlack%26isImmerse',
    //     'https://h5hosting-dra.dbankcdn.com/cch5/health/com.huawei.health.h5.sleeping-music/static/dist/index.html#/share?id=6&siteId=5&countryCode=ID&appVersion=and_health_15.1.4.330&applinking=true&deeplink=huaweihealth%3A%2F%2Fhuaweihealth.app%2Fopenwith%3Faddress%3Dcom.huawei.health.h5.sleeping-music%3Fh5pro%3Dtrue%26path%3DaudioDetail%26id%3D6%26pName%3Dcom.huawei.health%26type%3DsleepAudio%26statusBarTextBlack%26isImmerse'
    // ];

    const downloader = new MP3Downloader();
    await downloader.run(urls);
}

// Run the script
if (require.main === module) {
    main().catch(console.error);
}

module.exports = MP3Downloader;