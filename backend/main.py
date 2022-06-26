import json
from flask import Flask, render_template, request
from gensim.models import Word2Vec
import xml.etree.ElementTree as ET
import urllib.request
import urllib.parse
from urllib.parse import urlparse

app = Flask(__name__)

model_path="./model/word2vec.gensim.model"
model = Word2Vec.load(model_path)

def calc(word_list):
    positive = []
    negative = []
    if(len(word_list) > 2):
        for i in range(len(word_list)-3):
            if i == 0: # 初回は必ず+
                positive.append(word_list[i])
            if word_list[i + 1] == "-":
                negative.append(word_list[i+2])
            elif word_list[i+1] == "+":
                positive.append(word_list[i+2])
    else:
        positive.append(word_list[0])
    return model.most_similar(positive=positive, negative=negative)

@app.route("/", methods=["GET"])
def index():
    return render_template('index.html')

@app.route("/data", methods=['GET', 'POST'])
def post_data():
    sentense = request.form["sentense"]
    sentense_list = sentense.split(" ")
    Data = calc(sentense_list)
    result = {}
    i = 0
    for data in Data:
        value, score = data[0], data[1]
        d = {"main":value,"sub":score}
        result[i] = d
        i += 1
    return result

@app.route("/sweets", methods=['GET', 'POST'])
def sweets():
    sentense = request.form["sentense"]
    url = f'https://www.sysbird.jp/webapi/?apikey=guest&keyword={sentense}&max=10&order=r'

    p = urlparse(url)
    query = urllib.parse.quote_plus(p.query, safe='=&')
    url = '{}://{}{}{}{}{}{}{}{}'.format(
        p.scheme, p.netloc, p.path,
        ';' if p.params else '', p.params,
        '?' if p.query else '', query,
        '#' if p.fragment else '', p.fragment)
    with urllib.request.urlopen(url) as response:
        XmlData = response.read()
    xml = ET.fromstring(XmlData)
    result = {}
    i = 0
    for item in xml.iter('item'):
        name, maker = item.find('name').text, item.find('maker').text
        d = {"main":name,"sub":maker}
        result[i] = d
        i += 1
    return result

if __name__ == "__main__":
    app.run(port=8000)
