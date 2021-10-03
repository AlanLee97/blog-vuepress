# 远程控制KVM

编辑文件/etc/sysconfig/libvirtd

```sh
vim /etc/sysconfig/libvirtd
```





编辑配置文件/etc/libvirt/libvirtd.conf

```sh
vim /etc/libvirt/libvirtd.conf
```

打开以下注释

```sh
listen_tls = 0
listen_tcp = 1
tcp_port = "16509"
listen_addr = "0.0.0.0"
auth_tcp = "none"
```



重启libvirtd服务

```sh
service libvirtd restart 
```



使用virsh远程调用

```sh
virsh -c qemu+tcp://192.168.0.31/system
```





### 使用程序控制KVM

使用java控制kvm

```java
package kvm;

import org.libvirt.Connect;
import org.libvirt.LibvirtExcption;

public class TestKvm{
    public static void main(String[] args){
        try{
            Connect conn = new Connect("qemu+tcp://192.168.0.31/system");
            // 打开虚拟机
            conn.domainLookupByName("centos7").create();
            // 关闭虚拟机
            conn.domainLookupByName("centos7").shutdown();
        }
    }
}
```

