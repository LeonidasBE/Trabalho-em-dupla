package com.brothers.delivery.service;
import java.util.List;
import org.springframework.stereotype.Component;
import com.brothers.delivery.entity.Pedido;

@Component
public interface PedidoService {

    List<Pedido> getAllPedidos();

    Pedido createPedido(Pedido pedido);

    Pedido getPedidoById(Long id);

    Pedido updatePedido(Long id, Pedido pedido);

    void deletePedido(Long id);

}
