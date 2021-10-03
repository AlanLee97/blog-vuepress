# 安装KVM

##### 1. CPU检测

```sh
egrep -c '(vmx|svm)' /proc/cpuinfo
```

命令结果大于0表示cpu支持虚拟化





##### 2. 安装命令kvm

```sh
yum install -y qemu-kvm
```



##### 3. 安装虚拟化管理工具

```sh
yum install -y virt-manager libvirt libvirt-python python-virtinst bridge-utils
```

> libvirt：操作和管理KVM虚机的虚拟化 API，使用 C 语言编写，可以由 Python,Ruby, Perl, PHP, Java 等语言调用。可以操作包括 KVM，vmware，XEN，Hyper-v, LXC 等 Hypervisor。 
>
> Virsh：基于 libvirt 的 命令行工具 （CLI）
>
>  Virt-Manager：基于 libvirt 的 GUI 工具



##### 4. 查看**kvm** 内核模块

```sh
lsmod | grep kvm
modprobe kvm
modprobe kvm-intel
```



##### 5. 查看libvirt

关闭防火墙

```sh
service firewalld stop
```

开启libvirt

```sh
service libvirtd restart
chkconfig libvirtd on
```



##### 6. 创建虚拟机硬盘

创建文件夹

```sh
mkdir -p /kvmtest/centos7
```



创建安装盘

```sh
qemu-img create -f qcow2 /kvmtest/centos7/centos7.qcow2 10G
```



> 默认网络配置文件
>
> /etc/libvirt/qemu/networks



##### 7. 创建虚拟机

下载centos，下载地址：http://mirrors.aliyun.com/centos/7.8.2003/isos/x86_64/



将iCentOS-7-x86_64-Minimal-2003.iso文件上传到服务器





创建虚拟机

```sh
virt-install --virt-type kvm --name centos7 --ram 1024 \
--vcpus 1 \
--cdrom=/kvmtest/centos7/CentOS-7-x86_64-Minimal-2003.iso \
--disk /kvmtest/centos7/centos7.qcow2,format=qcow2 \
--network network=default \
--graphics vnc,listen=0.0.0.0 --noautoconsole \
--os-type=linux --os-variant=rhel6
```



##### 8. 连接

查看端口

```sh
netstat -natp
```





##### 9.使用vnc软件连接





点击ok之后出现centos的安装界面，自己手动安装即可



安装完之后重启





##### 10. 使用virsh

```sh
virsh
```







查看虚拟机

```sh
list --all
```





启动虚拟机

```sh
start centos7
```





##### 11. 打开VNC



此时已经启动安装的虚拟机了。



## 配置桥接网络

> 在宿主机上操作

```sh
vim ifcfg-ens33
```

内容如下

```
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=7adeb72e-13ae-47d8-8bc3-2f8e89701bad
DEVICE=ens33
# 添加网桥
BRIDGE=br0
ONBOOT=yes
IPADDR=192.168.0.30
NETMASK=255.255.255.0
GATEWAY=192.168.0.2
DNS1=8.8.8.8
DNS2=114.114.114.114
```





将ifcfg-ens33复制一份文件，用来做网桥的配置文件

```sh
cp ifcfg-ens33 ifcfg-br0
```

内容如下

```
TYPE=Bridge
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static
DEFROUTE=yes
NAME=ens33
DEVICE=br0
ONBOOT=yes
IPADDR=192.168.0.30
NETMASK=255.255.255.0
GATEWAY=192.168.0.2
DNS1=8.8.8.8
DNS2=114.114.114.114
```





使用virsh

```sh
virsh
```





```sh
net-edit default
```













```sh

net-define /etc/libvirt/qemu/networks/default.xml

net-destroy default

net-start default

# 关闭重启（冷启动）
shutdown centos7
start centos7
```











## 遇到的问题

### 问题1

-bash: virt-install: command not found





安装

```sh
yum install -y libguestfs-tools

yum install -y virt-install.noarch
```

