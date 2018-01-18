 private async Task<JObject> getRawPostData()
        {
            using (var contentStream = await this.Request.Content.ReadAsStreamAsync())
            {
                contentStream.Seek(0, SeekOrigin.Begin);
                using (var sr = new StreamReader(contentStream))
                {
                    string str = sr.ReadToEnd();
                    return JObject.Parse(str);
                }
            }
        }
