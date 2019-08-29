import requests
import re
import json
import time

# from 类.lei import z_shuju
# from 类.lei import z_y

import requests
import re
import json
import time
# from selenium import webdriver
import pymysql


####################################  爬取得到网页源码----1  ##################
def getWangYeYuanMa_1(zhi):
    # print("getWangYeYuanMa_1（）函数：获取整个网页的源码。并返回")
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:63.0) Gecko/20100101 Firefox/63.0',
        'Host': '33997e.com',
        'Referer': 'http://33997e.com/lottery/LHC/1300'
    }
    params = {
        # 获取30单数据
        'dataNum': zhi,
        'lotteryCode': '1008'
    }
    cookies = {
        'JSESSIONID': 'FA5BAA3A7C91523488461D16EDC3C53'
    }
    try:
        text_ = requests.get('http://33997e.com/v1/lottery/openResult', params=params, headers=headers,
                             cookies=cookies)
    except Ellipsis:
        time.sleep(5)
        getWangYeYuanMa_1(zhi)
    return text_.text


###########################################################################################################################  200  start ##################
####################################  爬取200个数据  ##################
def lushuget_danGeShuJu_200(zhi):
    """
    :return: 获取并返回转型为int类型的日期和首位的数据。
    """
    list_ = []
    list_.clear()  # 先清空再添加数据
    # print("lushuget_danGeShuJu_200（）函数：获取单个数据：获取并返回转型为int类型的日期和首位的数据。")
    text_ = getWangYeYuanMa_1(zhi)
    zz = '"lotteryCode":"1008","issue":"(.*?)","openNumber":"(.*?),(.*?),(.*?),(.*?),(.*?)","openTime":".*?","open":true,"createdTime"'
    gf = re.compile(zz, re.S)
    # 正则表达式:
    # search：得到的结果至少一个，第一个为正则表达式的模型，之后为要获取的数
    zhi = re.findall(gf, text_)
    # print("lushuget_danGeShuJu_200( ):获取结果：", "--日期：", zhi[1], "--码值：", zhi[2])
    # print(zhi[0])
    zhi.sort(reverse=False)
    for i in zhi:
        te = []
        for jj in i:
            te.append(int(jj))
        list_.append(te)
    # print(zhi)
    return list_

######################### 输入列表，并确定区域，排列得到从打到小的值
def sort(qq, zhi, geshu=5):
    shuJu = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    list_ = zhi
    tt = qq
    for i in list_:
        if i[tt] == 0:
            shuJu[0] += 1
        if i[tt] == 1:
            shuJu[1] += 1
        if i[tt] == 2:
            shuJu[2] += 1
        if i[tt] == 3:
            shuJu[3] += 1
        if i[tt] == 4:
            shuJu[4] += 1
        if i[tt] == 5:
            shuJu[5] += 1
        if i[tt] == 6:
            shuJu[6] += 1
        if i[tt] == 7:
            shuJu[7] += 1
        if i[tt] == 8:
            shuJu[8] += 1
        if i[tt] == 9:
            shuJu[9] += 1

    uu = shuJu.copy()
    uu.sort(reverse=True)
    # print(uu)
    ret = []
    for i in range(0, geshu):
        # print(shuJu.index(uu[i]))
        ret.append(shuJu.index(uu[i]))
        shuJu[shuJu.index(uu[i])] = 999
    # print(ret)
    return ret

####################################  前三星---一码---计算前三个区出现过最多的码  ##################
def qianSan_1(zhi, geshu=5):
    shuju = lushuget_danGeShuJu_200(zhi)
    jj1 = sort(1, shuju, geshu)
    jj2 = sort(2, shuju, geshu)
    jj3 = sort(3, shuju, geshu)

    print("jjj1:", jj1, "---jj2:", jj2, "---jj3:", jj3)

    shuJu = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    list_ = jj1 + jj2 + jj3
    # print(list_)
    for i in list_:
        if i == 0:
            shuJu[0] += 1
        if i == 1:
            shuJu[1] += 1
        if i == 2:
            shuJu[2] += 1
        if i == 3:
            shuJu[3] += 1
        if i == 4:
            shuJu[4] += 1
        if i == 5:
            shuJu[5] += 1
        if i == 6:
            shuJu[6] += 1
        if i == 7:
            shuJu[7] += 1
        if i == 8:
            shuJu[8] += 1
        if i == 9:
            shuJu[9] += 1

    uu = shuJu.copy()
    uu.sort(reverse=True)
    # print(uu)
    ret = []
    for i in range(0, geshu):
        # print(shuJu.index(uu[i]))
        ret.append(shuJu.index(uu[i]))
        shuJu[shuJu.index(uu[i])] = 999
    print("jjj1-jjj3:", ret)
    return ret

####################################  爬取1个数据  ##################
def lushuget_danGeShuJu_1():
    """
    :return: 获取并返回转型为int类型的日期和首位的数据。
    """
    list_ = []
    list_.clear()  # 先清空再添加数据
    # print("lushuget_danGeShuJu_200（）函数：获取单个数据：获取并返回转型为int类型的日期和首位的数据。")
    text_ = getWangYeYuanMa_1(30)
    zz = '"lotteryCode":"1008","issue":"(.*?)","openNumber":"(.*?),(.*?),(.*?),(.*?),(.*?)","openTime":".*?","open":true,"createdTime"'
    gf = re.compile(zz, re.S)
    # 正则表达式:
    # search：得到的结果至少一个，第一个为正则表达式的模型，之后为要获取的数
    zhi = re.search(gf, text_)
    # print("lushuget_danGeShuJu_200( ):获取结果：", "--日期：", zhi[1], "--码值：", zhi[2])
    # list_的结果例如：[201906061125, 0, 7, 6, 5, 5]
    for i in range(1, 7):
        list_.append(int(zhi[i]))
    # print(zhi)
    # print(list_)
    # 将list_的转换成对应的路数 ， 例如：[201906061125, 0, 7, 6, 5, 5]
    return list_


####################################################    类
# 大发时时彩，三星，一码，预选值出现最多的第一个值,并且下压值递增，连续错规定的次数后，不再下压，待恢复正确值再下压
class sanXing2():
    QEZhi1 = []  # 万位预测值, [8, 1, 2, 9, 0]
    DangQianZhi = []  # 得到当前期的数据，日期和码数, [201908191236, 5, 5, 8, 7, 8]
    returnList = []  # 用于累加jisuang2方法的返回值
    geshu = [0]

    def __init__(self, zhi=[]):
        #     "name": "",
        #     "qian": [10],
        #     "zdqian": [0],
        #     "zxqian": [100],
        #     "cishu": [0],
        #     "suo": [0],
        #     "xiaya": [],
        #     "suozhi": [5],
        #     "cishu_zong": [0],
        #     "beishu": 0.01

        self.mubiao = zhi    # 是字典，保存着所有要的值，例如名称，钱，等等，和__init__（）里的差不多：例如下面的例子

        sanXing2.geshu[0] += len(self.mubiao)

        self.ii = [0]
        for uu in self.mubiao:
            self.ii[0] += 1
            if 'name' not in uu.keys():
                uu["name"] = self.ii[0]
            if 'qian' not in uu.keys():
                uu["qian"] = [10]
            if 'zdqian' not in uu.keys():
                uu["zdqian"] = [0]
            if 'zxqian' not in uu.keys():
                uu["zxqian"] = [100]
            if 'cishu' not in uu.keys():
                uu["cishu"] = [0]
            if 'suo' not in uu.keys():
                uu["suo"] = [0]
            if 'xiaya' not in uu.keys():
                uu["xiaya"] = [1, 2, 3, 4, 5]
            if 'suozhi' not in uu.keys():
                uu["suozhi"] = [5]
            if 'cishu_zong' not in uu.keys():
                uu["cishu_zong"] = [0]
            if 'beishu' not in uu.keys():
                uu["beishu"] = 0.01

        # self._shangzhi1 = []  # 保存上期万位的值预测值
        # self.qian = [10]  # 默认金额为10
        # self.zdqian = [0]  # 最高金额
        # self.zxqian = [100]  # 最低金额
        # self.cishu = [0]  # 出现错误的次数，默认为0
        # self.suo = [0]  # 上锁，默认不上锁，例如连续超过几次不中就锁住不让继续下注，或金额超值等情况
        # self.xiaya = []  # 下压的递增值
        # self.suozhi = [5]  # 规定错误次数，错误次数超过规定值就上锁，默认为5
        # self.cishu_zong = [0]  # 失败的总次数
        # self.name = ""  # 实例名称
        # self.beishu = 0.01  # 倍数，有元，角， 分，对应1,0.1， 0.01

        self.setChuXianZhi()
        self.setDangQianZhi()
        self.setShangZhi()

    def setMuBiao(self, zhi=[]):
        self.mubiao = zhi

    # 设置前三的出现最多的5个值
    def setChuXianZhi(self, zhi=200, jjj=10):
        # zhi:多少组数据
        # jjj：几个预选值
        sanXing2.QEZhi1 = qianSan_1(zhi, jjj)
        return sanXing2.QEZhi1

    # 得到当前期的数据
    def setDangQianZhi(self):
        sanXing2.DangQianZhi = lushuget_danGeShuJu_1()
        return sanXing2.DangQianZhi

    # 设置保存上期万位和千位的值
    def setShangZhi(self, zhi=5):
        self._shangzhi1 = []
        for i in range(0, zhi):
            self._shangzhi1.append(sanXing2.QEZhi1[i])

    def return2(self, uu):
        if uu["suo"][0] == 0:
            return uu["name"], self._shangzhi1, uu["xiaya"][uu["cishu"][0]], uu["qian"], uu["cishu"]
        else:
            return uu["name"], self._shangzhi1, 0, uu["qian"], uu["cishu"]

    def jisuan2(self):
        for uu in self.mubiao:
            if sanXing2.DangQianZhi[1] in self._shangzhi1 or sanXing2.DangQianZhi[2] in self._shangzhi1 or \
                    sanXing2.DangQianZhi[3] in self._shangzhi1:
                if uu["suo"][0] == 0:
                    if uu["cishu"][0] == 0:
                        uu["qian"][0] += 5 * uu["xiaya"][0] * uu["beishu"]
                    elif uu["cishu"][0] == 1:
                        uu["qian"][0] += 5 * uu["xiaya"][1] * uu["beishu"]
                    elif uu["cishu"][0] == 2:
                        uu["qian"][0] += 5 * uu["xiaya"][2] * uu["beishu"]
                    elif uu["cishu"][0] == 3:
                        uu["qian"][0] += 5 * uu["xiaya"][3] * uu["beishu"]
                    elif uu["cishu"][0] == 4:
                        uu["qian"][0] += 5 * uu["xiaya"][4] * uu["beishu"]
                    elif uu["cishu"][0] == 5:
                        uu["qian"][0] += 5 * uu["xiaya"][5] * uu["beishu"]
                    elif uu["cishu"][0] == 6:
                        uu["qian"][0] += 5 * uu["xiaya"][6] * uu["beishu"]
                uu["cishu"][0] = 0
                uu["suo"][0] = 0  # 解锁

            else:
                if uu["suo"][0] == 0:
                    if uu["cishu"][0] == 0:
                        uu["qian"][0] -= 2 * uu["xiaya"][0] * uu["beishu"]
                    elif uu["cishu"][0] == 1:
                        uu["qian"][0] -= 2 * uu["xiaya"][1] * uu["beishu"]
                    elif uu["cishu"][0] == 2:
                        uu["qian"][0] -= 2 * uu["xiaya"][2] * uu["beishu"]
                    elif uu["cishu"][0] == 3:
                        uu["qian"][0] -= 2 * uu["xiaya"][3] * uu["beishu"]
                    elif uu["cishu"][0] == 4:
                        uu["qian"][0] -= 2 * uu["xiaya"][4] * uu["beishu"]
                    elif uu["cishu"][0] == 5:
                        uu["qian"][0] -= 2 * uu["xiaya"][5] * uu["beishu"]
                    elif uu["cishu"][0] == 6:
                        uu["qian"][0] -= 2 * uu["xiaya"][6] * uu["beishu"]
                uu["cishu"][0] += 1

            if uu["cishu"][0] >= uu["suozhi"][0]:  # 上锁
                uu["suo"][0] = 1

            if uu["cishu"][0] == uu["suozhi"][0]:  # 失败的总次数
                uu["cishu_zong"][0] += 1

            if uu["qian"][0] > uu["zdqian"][0]:
                uu["zdqian"][0] = uu["qian"][0]

            if uu["qian"][0] < uu["zxqian"][0]:
                uu["zxqian"][0] = uu["qian"][0]

            tt = sanXing2.DangQianZhi[1], sanXing2.DangQianZhi[2], sanXing2.DangQianZhi[3]

            print("qian:", ("%.4f" % uu["qian"][0]), "--zdq:", ("%.4f" % uu["zdqian"][0]), "--zgq:",
                  ("%.4f" % uu["zxqian"][0]), "--", uu["name"], "--/出错次数:",
                  uu["cishu_zong"][0], "--/", "-连续次数：", uu["cishu"][0], "--/旧范围：",
                  self._shangzhi1, "--/出现值：", tt, "--/期数：", sanXing2.DangQianZhi[0])

            self.setShangZhi(1)

            if len(sanXing2.returnList) <= sanXing2.geshu[0]:
                # print("33333")
                sanXing2.returnList.append(self.return2(uu))
            elif len(sanXing2.returnList) > sanXing2.geshu[0]:
                for i in range(0, len(sanXing2.returnList)):
                    # print("-----------", sanXing2.returnList[i][0], uu["name"])
                    if sanXing2.returnList[i][0] == uu["name"]:
                        # print("1111")
                        sanXing2.returnList[i] = self.return2(uu)
                        break

####################################################    运行
# 保存当前期的日期
data_date = [-1]

ttt = sanXing2([
    {
        "name": "a-1",
        "qian": [15.4],
        # "xiaya": [],
        "suozhi": [5],
        "beishu": 0.1
    },
    {
        "name": "a-2",
        "qian": [27.6],
        "xiaya": [0, 1, 3, 8, 0, 0],
        "suozhi": [4],
        "beishu": 0.1
    },
    {
        "name": "a-3",
        "qian": [14],
        "xiaya": [0, 1, 2, 3, 4, 0],
        # "suozhi": [5],
        "beishu": 0.1
    },
    {
        "name": "a-4",
        "qian": [11],
        "xiaya": [1, 2, 3, 5, 8, 0],
        # "suozhi": [5],
        "beishu": 0.1
    },
    {
        "name": "a-5",
        "qian": [4.9],
        "xiaya": [0, 1, 2, 3, 5, 8],
        "suozhi": [6],
        "beishu": 0.1
    },

])

fff = sanXing2([
    {
        "name": "b-1",
        # "qian": [15.4],
        # "xiaya": [],
        "suozhi": [5],
        "beishu": 0.1
    },
    {
        "name": "b-2",
        # "qian": [27.6],
        "xiaya": [0, 1, 3, 8, 0, 0],
        "suozhi": [4],
        "beishu": 0.1
    },
    {
        "name": "b-3",
        # "qian": [14],
        "xiaya": [0, 1, 2, 3, 4, 0],
        # "suozhi": [5],
        "beishu": 0.1
    },
    {
        "name": "b-4",
        # "qian": [11],
        "xiaya": [1, 2, 3, 5, 8, 0],
        # "suozhi": [5],
        "beishu": 0.1
    },
    {
        "name": "b-5",
        # "qian": [4.9],
        "xiaya": [0, 1, 2, 3, 5, 8],
        "suozhi": [6],
        "beishu": 0.1
    },

])

ddd = sanXing2([
    {
        "name": "c-1",
        # "qian": [15.4],
        # "xiaya": [],
        "suozhi": [5],
        "beishu": 0.1
    },
    {
        "name": "c-2",
        # "qian": [27.6],
        "xiaya": [0, 1, 3, 8, 0, 0],
        "suozhi": [4],
        "beishu": 0.1
    },
    {
        "name": "c-3",
        # "qian": [14],
        "xiaya": [0, 1, 2, 3, 4, 0],
        # "suozhi": [5],
        "beishu": 0.1
    },
    {
        "name": "c-4",
        # "qian": [11],
        "xiaya": [1, 2, 3, 5, 8, 0],
        # "suozhi": [5],
        "beishu": 0.1
    },
    {
        "name": "c-5",
        # "qian": [4.9],
        "xiaya": [0, 1, 2, 3, 5, 8],
        "suozhi": [6],
        "beishu": 0.1
    },

])

ss = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
qian = [10]
shangzhi1 = [[0]]
beishu = 0.1
xiaya = [0]

def main():
    try:
        while True:
            # 每循环一次就更新要得到的数据
            gengXinShuJu = lushuget_danGeShuJu_1()
            # print("\n\n当前最新值为：", gengXinShuJu)
            # 将得到当前的日期和上次的日期进行判断，只有不等时才进行计算
            if data_date[0] != gengXinShuJu[0]:
                data_date[0] = gengXinShuJu[0]

                print("*********    10     *********")

                ttt.setDangQianZhi()

                ttt.setChuXianZhi(10, 3)

                ttt.jisuan2()

                time.sleep(1)

                fff.setChuXianZhi(10, 5)

                fff.jisuan2()

                time.sleep(1)

                ddd.setChuXianZhi(10, 7)

                ddd.jisuan2()

                bj = sanXing2.returnList[0]
                # print("----", z_y.sanXing2.returnList)
                if len(sanXing2.returnList) > 1:
                    for i in range(0, len(sanXing2.returnList) - 1):
                        if bj[3][0] < sanXing2.returnList[i + 1][3][0]:
                            bj = sanXing2.returnList[i + 1]

                print("bj----", bj)
                if gengXinShuJu[1] in shangzhi1[0] or gengXinShuJu[2] in shangzhi1[0] or gengXinShuJu[3] in \
                        shangzhi1[0]:
                    qian[0] += 5 * xiaya[0] * beishu
                else:
                    qian[0] -= 2 * xiaya[0] * beishu
                print("qian:", qian, "连续次数:", bj[4], "下压:", xiaya[0], "旧范围：", shangzhi1[0], "新范围：", bj[1])

                shangzhi1[0] = bj[1]
                xiaya[0] = bj[2]





            else:
                print("等待....\t", "\t")
                pass

            time.sleep(20)

    finally:
        # print("。。。本轮结束。。。\n")
        time.sleep(5)


if __name__ == '__main__':
    while True:
        try:
            main()
            print(
                "\n*\n*\nv\n*\n*\n*\n*\n*\n*\n*\n*\n*\n*\n*\n*\n*\n*\n*\n*\n**********************重启程序**********************\n*\n*\nv\n*\n*\n*\n*\n*\n*\n*\n*\n*\n*\n*\n*\n*\n*\n*\n*\n")
        except TypeError:
            time.sleep(5)
